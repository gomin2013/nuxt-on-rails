module.exports = {
  excludeFiles: ['node_modules/**'],
  disallowAttributeInterpolation: true,
  disallowBlockExpansion: true,
  disallowClassAttributeWithStaticValue: true,
  disallowDuplicateAttributes: true,
  disallowIdAttributeWithStaticValue: true,
  disallowLegacyMixinCall: true,
  disallowMultipleLineBreaks: true,
  disallowSpacesInsideAttributeBrackets: true,
  requireClassLiterals: true,
  requireClassLiteralsBeforeAttributes: true,
  requireLineFeedAtFileEnd: true,
  requireLowerCaseAttributes: true,
  requireLowerCaseTags: true,
  requireSpaceAfterCodeOperator: [
    '!=',
    '='
  ],
  requireSpecificAttributes: [
    {
      'img': [
        'alt',
        'width',
        'height'
      ]
    }
  ],
  requireStrictEqualityOperators: true,
  validateAttributeQuoteMarks: '\'',
  validateDivTags: true,
  validateIndentation: 2,
  validateSelfClosingTags: true,
  validateTemplateString: true
};
