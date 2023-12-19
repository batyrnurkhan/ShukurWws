from djoser.serializers import UserCreateSerializer
from rest_framework import serializers

from .models import CustomUser
from .models import Review

class CustomUserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = CustomUser
        fields = ('id', 'username', 'email', 'password', 'full_name', 'phone_number')


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'user', 'review_text', 'created_at']
        read_only_fields = ['user']