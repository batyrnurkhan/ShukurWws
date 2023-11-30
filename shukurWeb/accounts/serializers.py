from djoser.serializers import UserCreateSerializer
from rest_framework import serializers

from accounts.models import CustomUser


class CustomUserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = CustomUser
        fields = ('id', 'username', 'email', 'password', 'full_name', 'phone_number')
