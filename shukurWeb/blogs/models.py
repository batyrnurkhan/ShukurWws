from django.db import models
from django.utils import timezone

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    image1 = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    image2 = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    image3 = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now)  # Added line

    def __str__(self):
        return self.title
