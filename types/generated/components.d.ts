import type { Schema, Struct } from '@strapi/strapi';

export interface AssociationRelatedArticles extends Struct.ComponentSchema {
  collectionName: 'components_association_related_articles';
  info: {
    displayName: 'RelatedArticles';
  };
  attributes: {};
}

export interface AssociationRelatedQna extends Struct.ComponentSchema {
  collectionName: 'components_association_related_qnas';
  info: {
    description: '';
    displayName: 'RelatedQna';
  };
  attributes: {};
}

export interface CustomHandlingStep extends Struct.ComponentSchema {
  collectionName: 'components_custom_handling_steps';
  info: {
    displayName: 'HandlingStep';
  };
  attributes: {
    Step: Schema.Attribute.String;
  };
}

export interface CustomPolicy extends Struct.ComponentSchema {
  collectionName: 'components_custom_policies';
  info: {
    description: '';
    displayName: 'Policy';
  };
  attributes: {
    DateOfIssue: Schema.Attribute.Date;
    Guideline: Schema.Attribute.Blocks;
    ProductType: Schema.Attribute.Enumeration<
      ['Flight JL720', 'Flight JL721', 'Flight JL722']
    >;
    ref: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
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

export interface CustomSop extends Struct.ComponentSchema {
  collectionName: 'components_custom_sops';
  info: {
    description: '';
    displayName: 'SOP';
  };
  attributes: {
    CaseCategory: Schema.Attribute.Enumeration<
      ['Accommodation Change Management', 'Accommodation Has No Contract']
    >;
    HandlingStep: Schema.Attribute.Component<'custom.handling-step', true>;
  };
}

export interface FilterProblemId extends Struct.ComponentSchema {
  collectionName: 'components_filter_problem_ids';
  info: {
    description: '';
    displayName: 'ProblemId';
  };
  attributes: {};
}

export interface FilterProduct extends Struct.ComponentSchema {
  collectionName: 'components_filter_products';
  info: {
    description: '';
    displayName: 'product';
  };
  attributes: {};
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
      'custom.handling-step': CustomHandlingStep;
      'custom.policy': CustomPolicy;
      'custom.qna': CustomQna;
      'custom.sop': CustomSop;
      'filter.problem-id': FilterProblemId;
      'filter.product': FilterProduct;
      'filter.tag': FilterTag;
    }
  }
}
