import { Component, Inject } from "@angular/core";
import { LanguageService } from "../language.service";
import { LOCATION_TOKEN } from "../../../utils/di-tokens";
import { LANGUAGE_LOCAL_STORAGE_KEY } from "../language-statics";

/**
 * Shows a dropdown-menu of available languages
 */
@Component({
  selector: "app-language-select",
  templateUrl: "./language-select.component.html",
  styleUrls: ["./language-select.component.scss"],
})
export class LanguageSelectComponent {
  /**
   * The region code of the currently selected language/region
   */
  siteRegionCode: string;

  constructor(
    public translationService: LanguageService,
    @Inject(LOCATION_TOKEN) private location: Location
  ) {
    this.siteRegionCode = translationService.currentRegionCode();
  }

  changeLocale(lang: string) {
    localStorage.setItem(LANGUAGE_LOCAL_STORAGE_KEY, lang);
    this.location.reload();
  }
}