import type { Schema, Struct } from '@strapi/strapi';

export interface AssociationRelatedArticles extends Struct.ComponentSchema {
  collectionName: 'components_association_related_articles';
  info: {
    description: '';
    displayName: 'RelatedArticles';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
  };
}

export interface AssociationRelatedQna extends Struct.ComponentSchema {
  collectionName: 'components_association_related_qnas';
  info: {
    description: '';
    displayName: 'RelatedQna';
  };
  attributes: {
    qnas: Schema.Attribute.Relation<'oneToMany', 'api::qna.qna'>;
  };
}

export interface FilterCaseCategory extends Struct.ComponentSchema {
  collectionName: 'components_filter_case_categories';
  info: {
    displayName: 'CaseCategory';
  };
  attributes: {
    ProblemId: Schema.Attribute.String;
  };
}

export interface FilterTag extends Struct.ComponentSchema {
  collectionName: 'components_filter_tags';
  info: {
    description: '';
    displayName: 'tag';
  };
  attributes: {
    Key: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'association.related-articles': AssociationRelatedArticles;
      'association.related-qna': AssociationRelatedQna;
      'filter.case-category': FilterCaseCategory;
      'filter.tag': FilterTag;
    }
  }
}
