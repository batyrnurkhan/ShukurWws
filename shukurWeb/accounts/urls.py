from django.urls import path
from .views import ReviewListCreateView,User_profile_View

urlpatterns = [
    # ... other URL patterns ...
    path('reviews/', ReviewListCreateView.as_view(), name='review-list-create'),
    path("user_profile",User_profile_View.as_view())
]
