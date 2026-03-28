"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  ClipboardList,
  Brain,
  FileText,
  Bell,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const prototypeCases = [
  {
    id: 1,
    title: "Patient Communication Scenario",
    description:
      "Examines how AI handles patient-facing communication, response style, escalation cues, and contextual appropriateness in realistic scenarios.",
    icon: Users,
    specialty: "Communication",
    outcome: "Engagement",
    attributes: ["Education", "Evaluation"],
    caseUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 2,
    title: "Pre-Procedure Readiness Scenario",
    description:
      "Explores how AI supports readiness checks, preparation instructions, and completeness assessment before time or resources are committed.",
    icon: ClipboardList,
    specialty: "Preparation",
    outcome: "Readiness",
    attributes: ["Education", "Evaluation"],
    caseUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 3,
    title: "Symptom Pattern Interpretation Scenario",
    description:
      "Used to study how AI structures inputs, identifies patterns, and communicates uncertainty when scenarios involve symptom variation and ambiguity.",
    icon: Brain,
    specialty: "Interpretation",
    outcome: "Relevance",
    attributes: ["Education", "Evaluation"],
    caseUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 4,
    title: "Clinical Documentation Scenario",
    description:
      "Assesses how AI organizes documentation-style outputs, preserves fidelity to source information, and avoids overreach in realistic use cases.",
    icon: FileText,
    specialty: "Documentation",
    outcome: "Quality",
    attributes: ["Education", "Evaluation"],
    caseUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 5,
    title: "Continuity & Follow-Up Scenario",
    description:
      "Examines how AI supports continuity, follow-up communication, and workflow handoffs while maintaining clarity, restraint, and usefulness.",
    icon: Bell,
    specialty: "Continuity",
    outcome: "Retention",
    attributes: ["Education", "Evaluation"],
    caseUrl: "#",
    detailsUrl: "#",
  },
];

const uniqueValues = (items, key) => {
  const values = new Set();
  items.forEach((item) => {
    if (Array.isArray(item[key])) {
      item[key].forEach((v) => values.add(v));
    } else {
      values.add(item[key]);
    }
  });
  return ["All", ...Array.from(values)];
};

export function HealthcareToolsExplorer() {
  const [specialty, setSpecialty] = useState("All");
  const [outcome, setOutcome] = useState("All");
  const [attribute, setAttribute] = useState("All");
  const [sortBy, setSortBy] = useState("Default");

  const specialties = useMemo(
    () => uniqueValues(prototypeCases, "specialty"),
    []
  );
  const outcomes = useMemo(() => uniqueValues(prototypeCases, "outcome"), []);
  const attributes = useMemo(
    () => uniqueValues(prototypeCases, "attributes"),
    []
  );

  const filteredCases = useMemo(() => {
    let results = [...prototypeCases];

    if (specialty !== "All") {
      results = results.filter((item) => item.specialty === specialty);
    }

    if (outcome !== "All") {
      results = results.filter((item) => item.outcome === outcome);
    }

    if (attribute !== "All") {
      results = results.filter((item) => item.attributes.includes(attribute));
    }

    if (sortBy === "A-Z") {
      results.sort((a, b) => a.title.localeCompare(b.title));
    }

    return results;
  }, [specialty, outcome, attribute, sortBy]);

  const resetFilters = () => {
    setSpecialty("All");
    setOutcome("All");
    setAttribute("All");
    setSortBy("Default");
  };

  return (
    <div className="bg-offWhite">
      <div className="xl:px-32 lg:px-16 px-8 py-12">
        <h2 className="text-3xl font-bold mb-2 text-foreground">
          Prototype Case Studies (for Education &amp; Evaluation)
        </h2>

        <p className="text-muted-foreground mb-4 max-w-4xl">
          These case studies are derived from prototypes developed and evaluated
          on Applina.
        </p>

        <p className="text-muted-foreground mb-4 max-w-4xl">
          They are used within coursework and structured evaluation exercises to
          examine how AI behaves in realistic scenarios, identify limitations,
          and assess real-world relevance.
        </p>

        <p className="text-muted-foreground mb-4 max-w-4xl">
          They are not clinical tools and are not intended to replace
          professional judgment.
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
              <Select value={specialty} onValueChange={setSpecialty}>
                <SelectTrigger className="bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {specialties.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Outcome
              </label>
              <Select value={outcome} onValueChange={setOutcome}>
                <SelectTrigger className="bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {outcomes.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Attributes
              </label>
              <Select value={attribute} onValueChange={setAttribute}>
                <SelectTrigger className="bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {attributes.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
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
                  <SelectItem value="Default">Default</SelectItem>
                  <SelectItem value="A-Z">A–Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="w-full md:w-auto"
            onClick={resetFilters}
          >
            Reset Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCases.map((item) => {
            const IconComponent = item.icon;

            return (
              <Card
                key={item.id}
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
                          {item.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          Case study
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Used in coursework
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        <Badge variant="outline" className="text-xs">
                          {item.specialty}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {item.outcome}
                        </Badge>
                        {item.attributes.map((attr) => (
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
                          onClick={() => window.open(item.caseUrl || "#", "_blank")}
                        >
                          View Case
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={() =>
                            window.open(item.detailsUrl || "#", "_blank")
                          }
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredCases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No case studies found matching your filters. Try adjusting your
              criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}