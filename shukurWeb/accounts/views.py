from rest_framework import generics


from .models import Review,CustomUser
from .serializers import ReviewSerializer,CustomUserCreateSerializer
#from rest_framework.permissions import IsAuthenticated

class User_profile_View(generics.ListAPIView):
    serializer_class = CustomUserCreateSerializer

    def get_queryset(self):
        return CustomUser.objects.filter(id=self.request.user.id)


class ReviewListCreateView(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
