from rest_framework import generics
from .serializers import Rec_places_SERIALIZERS
from .models import Rec_places
class Rec_palces_views(generics.ListAPIView):
    serializer_class = Rec_places_SERIALIZERS
    queryset = Rec_places.objects.all()
