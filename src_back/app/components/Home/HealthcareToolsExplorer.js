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

// NOTE: Prototype library entries are for educational/testing purposes.
// Avoid “Featured/Reviews” claims unless you have auditable real data.
const healthcareTools = [
  {
    id: 1,
    title: "AI Receptionist Lite",
    description: "Supports patient communication and intake",
    icon: Users,
    specialty: "Reception",
    outcome: "Primary Care and Med Spa",
    attributes: ["Reception", "Communication"],
    githubUrl: "#",
    demoUrl: "#",
    compliance: "HIPAA-safe",
  },
  {
    id: 2,
    title: "Pre Op and Intake Assistant",
    description: "Improves preparation and intake quality",
    icon: ClipboardList,
    specialty: "Intake",
    outcome: "Surgery and Wellness",
    attributes: ["Intake", "Surgery"],
    githubUrl: "#",
    demoUrl: "#",
    compliance: "HIPAA-safe",
  },
  {
    id: 3,
    title: "Pain Pattern Triage Assistant",
    description: "Improves clinical routing",
    icon: Brain,
    specialty: "Triage",
    outcome: "Pain Management and Physical Therapy",
    attributes: ["Triage", "Pain Management"],
    githubUrl: "#",
    demoUrl: "#",
    compliance: "HIPAA-safe",
  },
  {
    id: 4,
    title: "Auto Scribe Lite",
    description: "Reduces charting burden",
    icon: FileText,
    specialty: "Scribing",
    outcome: "Primary Care and Therapy",
    attributes: ["Scribing", "Primary Care"],
    githubUrl: "#",
    demoUrl: "#",
    compliance: "HIPAA-safe",
  },
  {
    id: 5,
    title: "Follow Up and Recall Assistant",
    description: "Improves continuity and recall workflows",
    icon: Bell,
    specialty: "Follow Up",
    outcome: "Psychiatry and Wellness",
    attributes: ["Follow-ups", "Psychiatry"],
    githubUrl: "#",
    demoUrl: "#",
    compliance: "HIPAA-safe",
  },
];

const specialties = ["All", "Reception", "Intake", "Triage", "Scribing", "Follow Up"];
const outcomes = [
  "All",
  "Primary Care and Med Spa",
  "Surgery and Wellness",
  "Pain Management and Physical Therapy",
  "Primary Care and Therapy",
  "Psychiatry and Wellness",
];
const attributes = [
  "All",
  "Reception",
  "Communication",
  "Intake",
  "Surgery",
  "Triage",
  "Pain Management",
  "Scribing",
  "Primary Care",
  "Follow-ups",
  "Psychiatry",
];

// Rename sort options to avoid “Recommended” endorsement language
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

    // Keep sorting neutral unless you have a real ranking method
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
      {/* Main Content */}
      <div className="xl:px-32 lg:px-16 px-8 py-12">
        <h2 className="text-3xl font-bold mb-2 text-foreground">
          Prototype Library (Educational &amp; Evaluation Use)
        </h2>

        <p className="text-muted-foreground mb-8 max-w-4xl">
          These prototypes support structured testing, coursework, and workflow evaluation.
          They are not clinical devices and are not intended to replace professional judgment.
        </p>

        {/* Filters */}
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

        {/* Tools Grid */}
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
                        {tool.description && tool.description.length > 140
                          ? tool.description.slice(0, 140) + "..."
                          : tool.description}
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
                          Build
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={() => window.open(tool.demoUrl || "#", "_blank")}
                          disabled={!tool.demoUrl || tool.demoUrl === "#"}
                        >
                          <PlayCircle className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {filteredAndSortedTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No prototypes found matching your filters. Try adjusting your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
