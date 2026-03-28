"use client";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Github, PlayCircle, Brain, Users, Bell, FileText, ClipboardList } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const healthcareTools = [
  {
    id: 1,
    title: "Patient Communication Prototype",
    description: "Grounded in a real evaluated artifact used to explore communication behavior, response style, and contextual appropriateness in realistic scenarios.",
    icon: Users,
    specialty: "Communication",
    outcome: "Relevance",
    attributes: ["Education", "Evaluation"],
    githubUrl: "#",
    demoUrl: "#",
    compliance: "Learning module",
  },
  {
    id: 2,
    title: "Readiness and Intake Prototype",
    description: "Used to examine how systems support preparation, instructions, completeness, and decision logic before time or resources are committed.",
    icon: ClipboardList,
    specialty: "Preparation",
    outcome: "Readiness",
    attributes: ["Education", "Evaluation"],
    githubUrl: "#",
    demoUrl: "#",
    compliance: "Learning module",
  },
  {
    id: 3,
    title: "Interpretation and Routing Prototype",
    description: "Supports structured learning around ambiguity, pattern identification, uncertainty communication, and real world relevance in complex scenarios.",
    icon: Brain,
    specialty: "Interpretation",
    outcome: "Relevance",
    attributes: ["Education", "Evaluation"],
    githubUrl: "#",
    demoUrl: "#",
    compliance: "Learning module",
  },
  {
    id: 4,
    title: "Documentation Behavior Prototype",
    description: "Examines how systems organize outputs, preserve fidelity to source information, and avoid overreach in realistic documentation settings.",
    icon: FileText,
    specialty: "Documentation",
    outcome: "Quality",
    attributes: ["Education", "Evaluation"],
    githubUrl: "#",
    demoUrl: "#",
    compliance: "Learning module",
  },
  {
    id: 5,
    title: "Follow Up and Continuity Prototype",
    description: "Used to explore handoffs, communication continuity, follow up behavior, and usefulness across extended real world interactions.",
    icon: Bell,
    specialty: "Continuity",
    outcome: "Retention",
    attributes: ["Education", "Evaluation"],
    githubUrl: "#",
    demoUrl: "#",
    compliance: "Learning module",
  },
];

const specialties = ["All", "Communication", "Preparation", "Interpretation", "Documentation", "Continuity"];
const outcomes = ["All", "Relevance", "Readiness", "Quality", "Retention"];
const attributes = ["All", "Education", "Evaluation"];
const sortOptions = ["Default", "Name"];

export function HealthcareToolsExplorer() {
  const [specialtyFilter, setSpecialtyFilter] = useState("All");
  const [outcomeFilter, setOutcomeFilter] = useState("All");
  const [attributeFilter, setAttributeFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Default");

  const filteredAndSortedTools = useMemo(() => {
    let filtered = healthcareTools.filter((tool) => {
      const matchesSpecialty =
        specialtyFilter === "All" || tool.specialty === specialtyFilter;
      const matchesOutcome =
        outcomeFilter === "All" || tool.outcome === outcomeFilter;
      const matchesAttribute =
        attributeFilter === "All" ||
        tool.attributes.some((attr) => attr === attributeFilter);

      return matchesSpecialty && matchesOutcome && matchesAttribute;
    });

    switch (sortBy) {
      case "Name":
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case "Default":
      default:
        return filtered;
    }
  }, [specialtyFilter, outcomeFilter, attributeFilter, sortBy]);

  return (
    <div className="bg-offWhite">
      <div className="xl:px-32 lg:px-16 px-8 py-12">
        <h2 className="text-3xl font-bold mb-2 text-foreground">
          Prototype Based Learning Modules for Education and Evaluation
        </h2>

        <p className="text-muted-foreground mb-4 max-w-4xl">
          These learning modules are derived from prototypes developed and evaluated on Applina.
        </p>

        <p className="text-muted-foreground mb-4 max-w-4xl">
          They are used within courses and structured evaluation exercises to examine how AI behaves in realistic scenarios, identify limitations, and assess real world relevance.
        </p>

        <p className="text-muted-foreground mb-4 max-w-4xl">
          Each module is grounded in an underlying artifact and designed to teach concepts, frameworks, and implementation considerations through direct interaction with evaluated systems.
        </p>

        <p className="text-muted-foreground mb-4 max-w-4xl">
          These artifacts often originate from research in design science, biomedical engineering, and applied AI, where they may otherwise remain isolated from practice.
        </p>

        <p className="text-muted-foreground mb-4 max-w-4xl">
          They are not clinical tools and are not intended to replace professional judgment.
        </p>

        <p className="text-foreground font-medium mb-8 max-w-4xl">
          To explore or build new prototypes, visit Applina.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Specialty
              </label>
              <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
                <SelectTrigger className="bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Outcome
              </label>
              <Select value={outcomeFilter} onValueChange={setOutcomeFilter}>
                <SelectTrigger className="bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {outcomes.map((outcome) => (
                    <SelectItem key={outcome} value={outcome}>
                      {outcome}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Attributes
              </label>
              <Select value={attributeFilter} onValueChange={setAttributeFilter}>
                <SelectTrigger className="bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {attributes.map((attribute) => (
                    <SelectItem key={attribute} value={attribute}>
                      {attribute}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Sort by
              </label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {sortOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="w-full md:w-auto"
            onClick={() => {
              setSpecialtyFilter("All");
              setOutcomeFilter("All");
              setAttributeFilter("All");
              setSortBy("Default");
            }}
          >
            Reset Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAndSortedTools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Card
                key={tool.id}
                className="hover:shadow-lg transition-all duration-300 border-border"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-brown shrink-0">
                      <IconComponent className="h-6 w-6 text-lightBrown" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="font-semibold text-lg text-foreground">
                          {tool.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          Prototype
                        </Badge>
                        {tool.compliance && (
                          <Badge variant="outline" className="text-xs">
                            {tool.compliance}
                          </Badge>
                        )}
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {tool.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {tool.attributes.map((attr) => (
                          <Badge key={attr} variant="outline" className="text-xs">
                            {attr}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={() => window.open(tool.githubUrl, "_blank")}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Explore Module
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={() => window.open(tool.demoUrl || "#", "_blank")}
                          disabled={!tool.demoUrl || tool.demoUrl === "#"}
                        >
                          <PlayCircle className="h-4 w-4 mr-2" />
                          View Artifact
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredAndSortedTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No learning modules found matching your filters. Try adjusting your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
