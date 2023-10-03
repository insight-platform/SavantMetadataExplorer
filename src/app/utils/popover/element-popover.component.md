### Mi Element Popover Component

**Mi Element Popover Component** allows adding Info popover to an element.
It requires replacing target element with `<mi-element-popover>` tag, apply help text translation key as `[helpText]` input, and set content with original element content.


```html
<!--before-->
<p>{{ 'APPLICATION_ANALYTICS.CHART_TYPE.WEEKDAY_BY_HOURS' | translate }}</p>

<!--after-->
<mi-element-popover [helpText]="'HELP_TEXT.APPLICATION_ANALYTICS.CHART_TYPE.WEEKDAY_BY_HOURS'">
  {{ 'APPLICATION_ANALYTICS.CHART_TYPE.WEEKDAY_BY_HOURS' | translate }}</mi-element-popover>
```

A hint will be displayed as a popover for text, text will be underlined to keep user attention.

If you add `iconMode` attribute to `<mi-element-popover>` tag, there will be a question mark sign after the text, which will contain Hint&Tips feature.
This mode is suitable for pages main titles or if underlining is not preferable.

```html
<h4>
  <mi-element-popover iconMode
                      unwrapText
                      [title]="'APPLICATION_ANALYTICS.TITLE.' + activeAnalyticReport">
  </mi-element-popover>
</h4>
```

By default `<mi-element-popover>` wraps content with `<p>` tag. If you do not need this functionality, please, add `unwrapText` attribute.
