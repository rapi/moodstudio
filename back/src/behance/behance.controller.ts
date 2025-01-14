import {Controller, Get, Param} from '@nestjs/common';
import {BehanceService, Project, ProjectDetails} from "./behance.service";

@Controller('behance')
export class BehanceController {
    constructor(private readonly behanceService: BehanceService) {}

    @Get("projects")
    getProjects(): Promise<Project[]> {
        return this.behanceService.getProjects();
    }
    @Get("project/:id")
    getProject(@Param('id') id: string):Promise<ProjectDetails> {
        return this.behanceService.getProject(id);
    }
}
