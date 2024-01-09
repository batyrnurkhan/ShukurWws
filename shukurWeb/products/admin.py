from django.contrib import admin
from .models import Product, Category,Frequently_viewed

class Category_admin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}

# Register your models here.
admin.site.register(Product)
admin.site.register(Category,Category_admin)
admin.site.register(Frequently_viewed)
