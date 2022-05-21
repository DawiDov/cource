from cgitb import text
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_400_BAD_REQUEST,
    HTTP_429_TOO_MANY_REQUESTS,
    HTTP_404_NOT_FOUND
    )

from .models import Article
from .serializers import ArcticleSerializer
import traceback



class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArcticleSerializer

    @action(
        methods=["GET"],
        detail=False,
        url_name="articles",
        url_path="articles",
    )
    def get_articles(self, request, pk):
        articles = self.get_object()
        articles[0].is_blocked = False
        articles.save()
        return Response(status=HTTP_200_OK, data={'accounts': articles})
