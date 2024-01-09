from .models import Rewiev
from .serializers import Review_serializers
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
class Review_View(generics.CreateAPIView):
    queryset = Rewiev.objects.all()
    serializer_class = Review_serializers
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            # Log the error
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)