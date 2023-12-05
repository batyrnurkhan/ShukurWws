from django.urls import path
from .views import ProductListCreateView, CategoryListCreateView, ProductRequestCreateView

urlpatterns = [
    path('list/', ProductListCreateView.as_view(), name='product-list'),
    path('categories/', CategoryListCreateView.as_view(), name='category-list'),
    path('product-requests/', ProductRequestCreateView.as_view(), name='product-request-create'),

]
