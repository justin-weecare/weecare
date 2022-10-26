import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    modals: Record<string, Record<string, boolean>> = {
        albumDetail: { visible: false }
    }

    setVisibility(modalName: string, visibility: boolean) {
        this.modals[modalName]['visible'] = visibility;
    }
}