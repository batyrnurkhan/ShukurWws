from ckeditor.fields import RichTextField
from django.db import models
from django.utils import timezone

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    text = RichTextField()
    created_at = models.DateTimeField(default=timezone.now)  # Added line

    def __str__(self):
        return self.title
