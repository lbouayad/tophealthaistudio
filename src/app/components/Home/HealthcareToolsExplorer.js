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
  Shield,
  MessageCircle,
  ClipboardCheck,
  FileText,
  RefreshCw,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const learningArtifacts = [
  {
    id: 1,
    title: "Autism Safety and Privacy Artifact (Familiar Voice Design)",
    type: "Artifact",
    moduleType: "Learning module",
    description:
      "Reimagines how safety systems support young adults with autism without compromising autonomy. Uses familiar voice interaction to preserve privacy while enabling timely response.",
    icon: Shield,
    category: "Neurodevelopment",
    focus: "Safety",
    attributes: ["Education", "Evaluation"],
    moduleUrl: "https://medaistudio.moodlecloud.com/login/index.php",
    artifactUrl: "https://applina.ai",
  },
  {
    id: 2,
    title: "Clinical Communication and Trust Artifact",
    type: "Prototype",
    moduleType: "Learning module",
    description:
      "Examines how communication affects patient decisions under uncertainty, including timing of care seeking, trust, and risk detection.",
    icon: MessageCircle,
    category: "Clinical Care",
    focus: "Communication",
    attributes: ["Education", "Evaluation"],
    moduleUrl: "https://medaistudio.moodlecloud.com/login/index.php",
    artifactUrl: "https://applina.ai",
  },
  {
    id: 3,
    title: "Clinical Readiness and Decision Boundary Artifact",
    type: "Prototype",
    moduleType: "Learning module",
    description:
      "Explores how readiness decisions are made, focusing on incomplete information, unsafe progression, and delays in care.",
    icon: ClipboardCheck,
    category: "Clinical Operations",
    focus: "Readiness",
    attributes: ["Education", "Evaluation"],
    moduleUrl: "https://medaistudio.moodlecloud.com/login/index.php",
    artifactUrl: "https://applina.ai",
  },
  {
    id: 4,
    title: "Clinical Documentation and Truth Representation Artifact",
    type: "Artifact",
    moduleType: "Learning module",
    description:
      "Examines how clinical encounters are translated into documentation, including accuracy, overinterpretation risk, and long term impact on care.",
    icon: FileText,
    category: "Documentation",
    focus: "Integrity",
    attributes: ["Education", "Evaluation"],
    moduleUrl: "https://medaistudio.moodlecloud.com/login/index.php",
    artifactUrl: "https://applina.ai",
  },
  {
    id: 5,
    title: "Follow Up and Continuity of Care Artifact",
    type: "Prototype",
    moduleType: "Learning module",
    description:
      "Explores why patients disengage despite recommendations, focusing on timing, relevance, and continuity of care.",
    icon: RefreshCw,
    category: "Care Continuity",
    focus: "Follow Up",
    attributes: ["Education", "Evaluation"],
    moduleUrl: "https://medaistudio.moodlecloud.com/login/index.php",
    artifactUrl: "https://applina.ai",
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
  const [category, setCategory] = useState("All");
  const [focus, setFocus] = useState("All");
  const [attribute, setAttribute] = useState("All");
  const [sortBy, setSortBy] = useState("Default");

  const categories = useMemo(
    () => uniqueValues(learningArtifacts, "category"),
    []
  );
  const focuses = useMemo(() => uniqueValues(learningArtifacts, "focus"), []);
  const attributes = useMemo(
    () => uniqueValues(learningArtifacts, "attributes"),
    []
  );

  const filteredArtifacts = useMemo(() => {
    let results = [...learningArtifacts];

    if (category !== "All") {
      results = results.filter((item) => item.category === category);
    }

    if (focus !== "All") {
      results = results.filter((item) => item.focus === focus);
    }

    if (attribute !== "All") {
      results = results.filter((item) => item.attributes.includes(attribute));
    }

    if (sortBy === "A-Z") {
      results.sort((a, b) => a.title.localeCompare(b.title));
    }

    return results;
  }, [category, focus, attribute, sortBy]);

  const resetFilters = () => {
    setCategory("All");
    setFocus("All");
    setAttribute("All");
    setSortBy("Default");
  };

  return (
    <div className="bg-offWhite">
      <div className="xl:px-32 lg:px-16 px-8 py-12">
        <h2 className="text-3xl font-bold mb-2 text-foreground">
          Prototype Based Learning Modules for Education and Evaluation
        </h2>

        <p className="text-muted-foreground mb-4 max-w-4xl">
          These modules are derived from artifacts evaluated after real world
          use.
        </p>

        <p className="text-muted-foreground mb-4 max-w-4xl">
          They are designed for providers and caregivers responsible for care
          decisions.
        </p>

        <p className="text-muted-foreground mb-8 max-w-4xl">
          Each module examines system behavior, limitations, safety impact, and
          workflow fit in realistic scenarios.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Category
              </label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {categories.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Focus
              </label>
              <Select value={focus} onValueChange={setFocus}>
                <SelectTrigger className="bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {focuses.map((item) => (
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
          {filteredArtifacts.map((item) => {
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
                          {item.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {item.moduleType}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {item.focus}
                        </Badge>
                        {item.attributes.map((attr) => (
                          <Badge
                            key={attr}
                            variant="outline"
                            className="text-xs"
                          >
                            {attr}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={() =>
                            window.open(
                              item.moduleUrl,
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
                        >
                          Explore Module
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={() =>
                            window.open(
                              item.artifactUrl,
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
                        >
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

        {filteredArtifacts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No learning modules found matching your filters. Try adjusting
              your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
