from django.urls import include, path

from rest_framework.routers import DefaultRouter

from .views import ArticleViewSet


app_name = 'article'

router = DefaultRouter()

router.register('articles', ArticleViewSet, basename='articles')

urlpatterns = [
    path("", include(router.urls)),
]
