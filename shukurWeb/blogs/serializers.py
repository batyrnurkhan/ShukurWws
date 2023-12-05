from rest_framework import serializers
from .models import BlogPost

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'text', 'image1', 'image2', 'image3', 'created_at']  # Added 'created_at'
