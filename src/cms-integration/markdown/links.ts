import { IconType } from '@icons';

export interface CMSLink {
  href: string;
  iconName: string;
  title: string;
}

export interface CMSLinkWithIcon extends CMSLink {
  icon: IconType;
}
