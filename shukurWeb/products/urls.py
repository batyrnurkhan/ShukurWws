from django.urls import path
from .views import *

urlpatterns = [
    path('list/', ProductListCreateView.as_view(), name='product-list'),
    path('categories/', CategoryListView.as_view(), name='category-list'),  # Add this line for categories list
    path('categories/<slug:slug>', CategoryListAPIView.as_view(), name='category-list'),
    path('product-requests/', ProductRequestCreateView.as_view(), name='product-request-create'),
    path("view",Product_View.as_view()),
    path("certify",Product_View_certifided.as_view()),
    path("not_certify",Product_View_not_certifided.as_view()),
    path("frequently_viewed",Frequently_viewed_View.as_view()),
    path("view/<int:pk>",Product_Raiting_View.as_view()),
    path("categories/<slug:slug>/certify",CategoryListAPIView_certifided.as_view()),
    path("categories/<slug:slug>/not_certify",CategoryListAPIView_not_certifided.as_view())
]
