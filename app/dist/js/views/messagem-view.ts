import { View } from "./view.js";

export class MessagemView extends View<string>
{


    protected templete(model: string): string{
        return`
            <p class="alert alert-info">${model}</p>
        `
    }


}