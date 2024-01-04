from .models import Rewiev
from .serializers import Review_serializers
from rest_framework import generics

class Review_View(generics.CreateAPIView):
    queryset = Rewiev.objects.all()
    serializer_class = Review_serializers