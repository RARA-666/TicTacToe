from django.urls import path

from login.views import IndexPage

urlpatterns = [ 
    path("", IndexPage.as_view()),
]