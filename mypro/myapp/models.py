from django.db import models

class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    duration = models.CharField(max_length=50)
    image=models.FileField(upload_to='images/')
    

    def _str_(self):
        return self.title
