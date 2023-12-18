from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    full_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    avatar=models.ImageField(upload_to="audio/%Y/%m/%d/",null=True)
    adres=models.ForeignKey("Adres",on_delete=models.SET_NULL,null=True)
class Adres(models.Model):
    city=models.CharField(max_length=255,default="")
    district =models.CharField(max_length=255,default="")
    home=models.CharField(max_length=255,default="")
class Review(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='reviews')
    review_text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review by {self.user.username}"
