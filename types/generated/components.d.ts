import type { Schema, Struct } from '@strapi/strapi';

export interface AssociationRelatedArticles extends Struct.ComponentSchema {
  collectionName: 'components_association_related_articles';
  info: {
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

export interface CustomAnotherPolicy extends Struct.ComponentSchema {
  collectionName: 'components_custom_another_policies';
  info: {
    description: '';
    displayName: 'AnotherPolicy';
  };
  attributes: {
    policy: Schema.Attribute.Component<'custom.policy', false>;
    qna: Schema.Attribute.Component<'custom.qna', true>;
  };
}

export interface CustomPolicy extends Struct.ComponentSchema {
  collectionName: 'components_custom_policies';
  info: {
    displayName: 'Policy';
  };
  attributes: {
    Another: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface CustomQna extends Struct.ComponentSchema {
  collectionName: 'components_custom_qnas';
  info: {
    displayName: 'qna';
  };
  attributes: {
    Answer: Schema.Attribute.String;
    Question: Schema.Attribute.String;
  };
}

export interface FilterProblemId extends Struct.ComponentSchema {
  collectionName: 'components_filter_problem_ids';
  info: {
    description: '';
    displayName: 'ProblemId';
  };
  attributes: {
    problem_ids: Schema.Attribute.Relation<
      'oneToMany',
      'api::problem-id.problem-id'
    >;
  };
}

export interface FilterProduct extends Struct.ComponentSchema {
  collectionName: 'components_filter_products';
  info: {
    description: '';
    displayName: 'product';
  };
  attributes: {
    productType: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
  };
}

export interface FilterTag extends Struct.ComponentSchema {
  collectionName: 'components_filter_tags';
  info: {
    displayName: 'tag';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'association.related-articles': AssociationRelatedArticles;
      'association.related-qna': AssociationRelatedQna;
      'custom.another-policy': CustomAnotherPolicy;
      'custom.policy': CustomPolicy;
      'custom.qna': CustomQna;
      'filter.problem-id': FilterProblemId;
      'filter.product': FilterProduct;
      'filter.tag': FilterTag;
    }
  }
}
