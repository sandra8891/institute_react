
booking/models.py
from django.db import models
from django.contrib.auth.models import User

class Turf(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=255)
    sport_type = models.CharField(max_length=50)
    description = models.TextField()
    image = models.ImageField(upload_to='turfs/')

    def __str__(self):
        return self.name

class TimeSlot(models.Model):
    turf = models.ForeignKey(Turf, on_delete=models.CASCADE)
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    is_booked = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.turf.name} - {self.date} - {self.start_time}"

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    slot = models.ForeignKey(TimeSlot, on_delete=models.CASCADE)
    booked_at = models.DateTimeField(auto_now_add=True)




turf_booking/
│
├── turf_booking/       # Django project settings
│   └── settings.py
├── booking/            # Django app for bookings
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   ├── templates/
│   │   ├── user/
│   │   └── admin/
│   └── static/         # CSS/JS/images
├── manage.py
└── templates/
    └── base.html



python manage.py createsuperuser



urls.py

from django.contrib.auth import views as auth_views

urlpatterns = [
    path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(next_page='home'), name='logout'),
    path('signup/', views.signup, name='signup'),
]


Signup view

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', {'form': form})





# admin.py
from .models import Turf, TimeSlot, Booking
admin.site.register(Turf)
admin.site.register(TimeSlot)
admin.site.register(Booking)


Or create custom pages for staff
@user_passes_test(lambda u: u.is_staff)
def admin_dashboard(request):
    turfs = Turf.objects.all()
    return render(request, 'admin/dashboard.html', {'turfs': turfs})




Homepage
Show all turfs

Filter by city/sport using JavaScript

Turf Detail Page
Show turf info

List available time slots



<form method="POST" action="{% url 'book_slot' slot.id %}">
    {% csrf_token %}
    <button type="submit">Book</button>
</form>


🔄 5. Booking Logic (views.py)


@login_required
def book_slot(request, slot_id):
    slot = get_object_or_404(TimeSlot, id=slot_id, is_booked=False)
    Booking.objects.create(user=request.user, slot=slot)
    slot.is_booked = True
    slot.save()
    return redirect('user_profile')




📄 8. URL Routing (booking/urls.py)


urlpatterns = [
    path('', views.home, name='home'),
    path('turf/<int:id>/', views.turf_detail, name='turf_detail'),
    path('book/<int:slot_id>/', views.book_slot, name='book_slot'),
    path('admin-panel/', views.admin_dashboard, name='admin_dashboard'),
    path('profile/', views.user_profile, name='user_profile'),
]


templates/
├── base.html
├── login.html
├── signup.html
├── user/
│   ├── profile.html
│   └── turf_detail.html
└── admin/
    ├── dashboard.html



 Frontend: JavaScript Code (inside turf_detail.html)


 <!-- Select date -->
<input type="date" id="booking-date" />

<!-- Where the slots will be rendered -->
<div id="slots-container"></div>

<script>
  document.getElementById('booking-date').addEventListener('change', function () {
    const date = this.value;
    const turfId = {{ turf.id }};  // passed from Django context

    fetch(`/api/slots?turf_id=${turfId}&date=${date}`)
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('slots-container');
        container.innerHTML = ''; // Clear previous results

        if (data.length === 0) {
          container.innerHTML = '<p>No available slots for this date.</p>';
          return;
        }

        data.forEach(slot => {
          const slotDiv = document.createElement('div');
          slotDiv.classList.add('slot');
          slotDiv.innerHTML = `
            <p>${slot.start_time} - ${slot.end_time}</p>
            <form method="POST" action="/book/${slot.id}/">
              <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrf_token }}">
              <button type="submit">Book</button>
            </form>
          `;
          container.appendChild(slotDiv);
        });
      })
      .catch(err => {
        console.error('Error loading slots:', err);
      });
  });
</script>




Backend: Django View (API Endpoint for Slots)

# views.py
from django.http import JsonResponse
from .models import TimeSlot
from datetime import datetime

def get_slots(request):
    turf_id = request.GET.get('turf_id')
    date_str = request.GET.get('date')

    if not turf_id or not date_str:
        return JsonResponse([], safe=False)

    date_obj = datetime.strptime(date_str, "%Y-%m-%d").date()
    slots = TimeSlot.objects.filter(turf_id=turf_id, date=date_obj, is_booked=False)

    data = [
        {
            'id': slot.id,
            'start_time': slot.start_time.strftime('%H:%M'),
            'end_time': slot.end_time.strftime('%H:%M')
        }
        for slot in slots
    ]
    return JsonResponse(data, safe=False)


✅ Django URL Mapping

# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('api/slots', views.get_slots, name='get_slots'),
    # other URLs
]
