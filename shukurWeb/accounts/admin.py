from django.contrib import admin
from .models import CustomUser,Adres, Review

admin.site.register(CustomUser)
admin.site.register(Adres)
admin.site.register(Review)
