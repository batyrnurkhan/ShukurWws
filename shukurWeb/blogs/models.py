from ckeditor.fields import RichTextField
from django.db import models
from django.utils import timezone

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    blog_img=models.ImageField(upload_to="photos/%Y/%m/%d/")
    text = RichTextField()
    created_at = models.DateTimeField(default=timezone.now)  # Added line

    def __str__(self):
        return self.title
