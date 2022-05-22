from rest_framework.serializers import ModelSerializer
from .models import Article, ArticleText, Extra, Bonus


class ArcticleSerializer(ModelSerializer):
  class Meta:
    model = Article
    fields = [
      "pk",
      "title",
      "label",
      "is_blocked",
    ]

class ArticleTextSerializer(ModelSerializer):
  article_id = ArcticleSerializer(read_only=True)

  class Meta:
    model = ArticleText
    fields = [
      "article_id",
      "title",
      "text",
      "image",
    ]

class ExtraSerializer(ModelSerializer):
  article_id = ArcticleSerializer(read_only=True)

  class Meta:
    model = Extra
    fields = [
      "article_id",
      "title",
      "text",
      "image",
    ]

class BonusSerializer(ModelSerializer):
  article_id = ArcticleSerializer(read_only=True)

  class Meta:
    model = Bonus
    fields = [
      "article_id",
      "title",
      "text",
      "image",
      "pdf",
      "meditation",
      "instruction",
    ]
