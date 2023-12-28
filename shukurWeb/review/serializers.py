from rest_framework import serializers
from .models import Rewiev

class Review_serializers(serializers.ModelSerializer):
    class Meta:
        model=Rewiev
        fields = "__all__"