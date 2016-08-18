import {
  BaseClientSideWebPart,
  IWebPartContext
} from '@microsoft/sp-client-preview';

import styles from './IconFontNames.module.scss';
import { IIconFontNamesWebPartProps } from './IIconFontNamesWebPartProps';

export default class IconFontNamesWebPart extends BaseClientSideWebPart<IIconFontNamesWebPartProps> {
  private fontIcons: string[] = ['Add', 'AddGroup', 'AlignCenter', 'AlignLeft', 'AlignRight', 'Attach', 'Back', 'BackToWindow', 'BlowingSnow', 'Bold', 'BulletedList', 'Calendar', 'Camera', 'Cancel', 'Chart', 'CheckMark', 'ChevronLeft', 'ChevronRight', 'CirclePlus', 'Clear', 'ClearFormatting', 'ClearNight', 'CloudWeather', 'Cloudy', 'Completed', 'CompletedSolid', 'Delete', 'DocLibrary', 'Duststorm', 'Edit', 'EditMirrored', 'Embed', 'Emoji2', 'ExcelLogo', 'FacebookLogo', 'FavoriteStar', 'FavoriteStarFill', 'Filter', 'Financial', 'Fog', 'Folder', 'FolderOpen', 'Font', 'FontStyleSerif', 'Forward', 'Freezing', 'Frigid', 'FullScreen', 'Globe', 'Group', 'HailDay', 'HailNight', 'Header', 'Italic', 'Link', 'Message', 'MobileSelected', 'More', 'MultiSelect', 'Nav2DMapView', 'News', 'NumberedList', 'OfficeVideoLogo', 'OneNoteLogo', 'OpenFile', 'OpenWith', 'Org', 'Page', 'PageAdd', 'PartlyCloudyDay', 'PartlyCloudyNight', 'Photo2', 'Photo2Add', 'Photo2Remove', 'PhotoCollection', 'Picture', 'Play', 'PowerApps', 'PowerBILogo', 'PowerPointLogo', 'Precipitation', 'Preview', 'Rain', 'RainShowersDay', 'RainShowersNight', 'RainSnow', 'Recent', 'Refresh', 'Remove', 'RemoveLink', 'Reshare', 'Ribbon', 'RightDoubleQuote', 'Save', 'Search', 'Settings', 'Share', 'SharepointLogo', 'SIPMove', 'Snow', 'SnowShowerDay', 'SnowShowerNight', 'Squalls', 'StackIndicator', 'Sunny', 'SwayLogo', 'Sync', 'System', 'Tablet', 'TabletSelected', 'Teamwork', 'Thunderstorms', 'Tiles', 'TVMonitorSelected', 'TwitterLogo', 'Underline', 'Unfavorite', 'Video', 'View', 'VisioLogo', 'Webcam', 'WordLogo', 'WorldClock', 'YammerLogo', 'Zoom', 'ZoomIn', 'ZoomOut'];

  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    let icons: string = '';
    this.fontIcons.forEach(fontIcon => {
      icons += `<li class="${styles.iconWrapper}"><span class="CanvasToolboxItem-icon ms-Icon ms-Icon--${fontIcon} ${styles.icon}"></span><span class="${styles.name}">${fontIcon}</span></li>`;
    });

    this.domElement.innerHTML = `
      <div class="${styles.helloWorld}">
        <ul>${icons}</ul>
        <div style="clear: both"></span>
      </div>`;
  }
}
