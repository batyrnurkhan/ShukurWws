from django.views.generic import ListView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Product, Category, Frequently_viewed
from .serializers import ProductSerializer, CategorySerializer, Frequently_viewed_products_serializers
from django.db.models import Q
from rest_framework import generics


class Product_Raiting_View(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class Product_View(generics.ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class Product_View_certifided(generics.ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.filter(certified=True)

class Product_View_not_certifided(generics.ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.filter(certified=False)

class Frequently_viewed_View(generics.ListAPIView):
    serializer_class = Frequently_viewed_products_serializers
    queryset = Frequently_viewed.objects.all()
class Search(ListView):
    template_name = "prducts/test.html"
    context_object_name = "object"

    def get_queryset(self):
        return Product.objects.filter()

class CategoryListAPIView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        print(self.kwargs['slug'])
        return Product.objects.filter(category__slug=self.kwargs['slug'])

class CategoryListAPIView_certifided(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        print(self.kwargs['slug'])
        return Product.objects.filter(category__slug=self.kwargs['slug']).filter(certified=True)

class CategoryListAPIView_not_certifided(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        print(self.kwargs['slug'])
        return Product.objects.filter(category__slug=self.kwargs['slug']).filter(certified=False)

class ProductListCreateView(generics.ListCreateAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all()
        search_param = self.request.query_params.get('search', None)
        if search_param is not None:
            queryset = queryset.filter(
                Q(name__icontains=search_param) |
                Q(details__icontains=search_param) |
                Q(ingredients__icontains=search_param)
            )
        return queryset

from .models import ProductRequest
from .serializers import ProductRequestSerializer
from rest_framework.permissions import IsAuthenticated

class ProductRequestCreateView(generics.CreateAPIView):
    queryset = ProductRequest.objects.all()
    serializer_class = ProductRequestSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(requested_by=self.request.user)

