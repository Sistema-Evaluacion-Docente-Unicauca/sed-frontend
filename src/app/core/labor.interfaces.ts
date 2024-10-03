export interface SearchResponse {
    labor: Labor[];
}

export interface Labor {
    type:       string;
    activities: Activity[];
}

export interface Activity {
    activities_name: string;
    source:          Source[];
}

export interface Source {
    name_source:    string;
    state:          string;
    evaluator:      string;
    rol_evaluator?: string;
    evaluated?:     string;
}
