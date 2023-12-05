from rest_framework import generics
from .models import Review
from .serializers import ReviewSerializer
#from rest_framework.permissions import IsAuthenticated

class ReviewListCreateView(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
