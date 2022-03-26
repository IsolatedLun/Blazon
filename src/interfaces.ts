export interface INF_Platform {
    name: string;
    url: string;
    profile: string;
}

export interface INF_Process {
    icon: string;
    title: string;
    text: string;
}

export interface INF_Influencer {
    username: string;
    link: string;
    followers: string;
}

export interface INF_InfluencerDict {
    [key: string]: INF_Influencer[]
}

export interface INF_Stat {
    key: string | number;
    value: string | number;
}

export interface INF_RequestForm {
    name: string;
    budget: number;
    telegram: string;
    extraInformation: string;
}