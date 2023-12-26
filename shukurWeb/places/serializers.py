from rest_framework import serializers
from .models import Rec_places
class Rec_places_SERIALIZERS(serializers.ModelSerializer):
    class Meta:
        model = Rec_places
        fields = "__all__"