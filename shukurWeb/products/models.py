# models.py
from django.db import models
from accounts.models import CustomUser

class Category(models.Model):
    slug = models.SlugField()
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.slug

class Product(models.Model):
    CERTIFICATION_STATUS_CHOICES = [
        ('halal', 'Халяль'),
        ('verified', 'Проверный'),
        ('doubtful', 'Сомнителный'),
        ('not_halal', 'Не халяльный')
    ]

    name = models.CharField(max_length=100)
    certified = models.BooleanField(default=False)
    certification_status = models.CharField(
        max_length=12,
        choices=CERTIFICATION_STATUS_CHOICES,
        default='halal'
    )
    img = models.ImageField(upload_to="photos/%Y/%m/%d/")
    img_2 = models.ImageField(upload_to="photos/%Y/%m/%d/")
    img_3 = models.ImageField(upload_to="photos/%Y/%m/%d/")
    img_4 = models.ImageField(upload_to="photos/%Y/%m/%d/")
    rating = models.FloatField(default=0.0)
    details = models.TextField()
    ingredients = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    parameter = models.TextField()

    def __str__(self):
        return self.name

class Frequently_viewed(models.Model):
    content = models.ManyToManyField(Product, blank=True)

class ProductRating(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='ratings')
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    rating = models.FloatField()

    def __str__(self):
        return f"{self.product.name} - {self.rating}"

class ProductRequest(models.Model):
    name = models.CharField(max_length=100)
    details = models.TextField(blank=True)
    requested_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    status = models.CharField(max_length=50, default='pending')

    def __str__(self):
        return f"Request for {self.name} by {self.requested_by.username}"
