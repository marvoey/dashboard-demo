export const PORTAL_WIDGET_EXPERIENCE_BY_PATH = `
  query contentByPath($base: String, $url: String!, $urlNoSlash: String!) {
    _Experience(
      where: {
        _metadata: { url: { base: { eq: $base } } }
        _and: [{
          _or: [
            { _metadata: { url: { default:      { eq: $url        } } } }
            { _metadata: { url: { default:      { eq: $urlNoSlash } } } }
            { _metadata: { url: { hierarchical: { eq: $url        } } } }
          ]
        }]
      }
    ) {
      item {
        _metadata { key version locale types }
        composition {
          key nodeType type displayName
          displaySettings { key value }
          sections: nodes {
            key nodeType type displayName displayTemplateKey
            displaySettings { key value }
            ... on CompositionStructureNode {
              rows: nodes {
                key nodeType type displayName displayTemplateKey
                displaySettings { key value }
                ... on CompositionStructureNode {
                  cols: nodes {
                    key nodeType type displayName displayTemplateKey
                    displaySettings { key value }
                    ... on CompositionStructureNode {
                      components: nodes {
                        key nodeType type displayName displayTemplateKey
                        displaySettings { key value }
                        ... on CompositionComponentNode {
                          component {
                            _metadata { types key version locale }
                            ...PortalWidgetAnnouncementBannerFields
                            ...PortalWidgetPersonalizedHeroFields
                            ...PortalWidgetResourceDownloadFields
                            ...PortalWidgetSpotlightCardFields
                            ...PortalWidgetRegulatoryNoticeFields
                            ...PortalWidgetCTAStripFields
                          }
                        }
                      }
                    }
                    ... on CompositionComponentNode {
                      component {
                        _metadata { types key version locale }
                        ...PortalWidgetAnnouncementBannerFields
                        ...PortalWidgetPersonalizedHeroFields
                        ...PortalWidgetResourceDownloadFields
                        ...PortalWidgetSpotlightCardFields
                        ...PortalWidgetRegulatoryNoticeFields
                        ...PortalWidgetCTAStripFields
                      }
                    }
                  }
                }
                ... on CompositionComponentNode {
                  component {
                    _metadata { types key version locale }
                    ...PortalWidgetAnnouncementBannerFields
                    ...PortalWidgetPersonalizedHeroFields
                    ...PortalWidgetResourceDownloadFields
                    ...PortalWidgetSpotlightCardFields
                    ...PortalWidgetRegulatoryNoticeFields
                    ...PortalWidgetCTAStripFields
                  }
                }
              }
            }
            ... on CompositionComponentNode {
              component {
                _metadata { types key version locale }
                ...PortalWidgetAnnouncementBannerFields
                ...PortalWidgetPersonalizedHeroFields
                ...PortalWidgetResourceDownloadFields
                ...PortalWidgetSpotlightCardFields
                ...PortalWidgetRegulatoryNoticeFields
                ...PortalWidgetCTAStripFields
              }
            }
          }
        }
      }
    }
  }

  fragment PortalWidgetAnnouncementBannerFields on PortalWidgetAnnouncementBanner {
    Tag
    Headline
    Body { html }
    CtaLabel
    CtaUrl
  }

  fragment PortalWidgetPersonalizedHeroFields on PortalWidgetPersonalizedHero {
    Segment
    Eyebrow
    Headline
    Subtext
    CtaLabel
    CtaUrl
  }

  fragment PortalWidgetResourceDownloadFields on PortalWidgetResourceDownload {
    Tag
    Title
    Description
    FileType
    FileSize
    Asset {
      key
    }
    UpdatedAt
  }

  fragment PortalWidgetSpotlightCardFields on PortalWidgetSpotlightCard {
    Tag
    Title
    Description
  }

  fragment PortalWidgetRegulatoryNoticeFields on PortalWidgetRegulatoryNotice {
    NoticeId
    Title
    Body { html }
    EffectiveDate
    ExpiryDate
  }

  fragment PortalWidgetCTAStripFields on PortalWidgetCTAStrip {
    Message { html }
    PrimaryCtaLabel
    PrimaryCtaUrl
    SecondaryCtaLabel
    SecondaryCtaUrl
  }
`;
