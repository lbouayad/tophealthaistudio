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
  Scale,
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
      "Reimagines how safety systems can support young adults with autism without compromising dignity or autonomy. Instead of relying on constant supervision or generic alerts, this artifact explores how familiar voice interactions can preserve privacy while still enabling timely response in high risk situations. For caregivers, this raises the question of how to support safety without increasing dependence. For providers, it highlights how design choices directly shape compliance, trust, and real world outcomes. This module focuses on designing for safety in ways that respect how individuals perceive and respond to their environment.",
    icon: Shield,
    category: "Neurodevelopment",
    focus: "Safety",
    attributes: ["Education", "Evaluation"],
    moduleUrl: "https://medaistudio.moodlecloud.com/login/index.php",
    artifactUrl: "https://applina.ai",
  },
  {
    id: 2,
    title:
      "Mental Health and Institutional Decision Artifact (Explainability and Fairness)",
    type: "Artifact",
    moduleType: "Learning module",
    description:
      "Explores how decisions about institutional versus community based care are shaped, and how mental health factors are often underrepresented or misunderstood. This artifact focuses on how transparency in decision making can influence fairness, accountability, and long term outcomes. For providers and policymakers, it raises critical questions about bias and incomplete data. For individuals and families, it highlights how unseen factors can influence life changing decisions. This module examines how AI can support more informed and equitable decision making.",
    icon: Scale,
    category: "Behavioral Health",
    focus: "Explainability",
    attributes: ["Education", "Evaluation"],
    moduleUrl: "https://medaistudio.moodlecloud.com/login/index.php",
    artifactUrl: "https://applina.ai",
  },
  {
    id: 3,
    title: "Clinical Communication and Trust Artifact",
    type: "Prototype",
    moduleType: "Learning module",
    description:
      "Examines how communication shapes patient decisions, especially when symptoms are unclear or evolving. Rather than focusing on what information is delivered, this artifact explores how it is delivered, and how that affects trust, understanding, and action. For patients, this determines whether they feel safe to wait or seek care. For providers, it highlights how communication design influences risk detection and timing. This module treats communication as a clinical intervention, not just an exchange of information.",
    icon: MessageCircle,
    category: "Clinical Care",
    focus: "Communication",
    attributes: ["Education", "Evaluation"],
    moduleUrl: "https://medaistudio.moodlecloud.com/login/index.php",
    artifactUrl: "https://applina.ai",
  },
  {
    id: 4,
    title: "Clinical Readiness and Decision Boundary Artifact",
    type: "Prototype",
    moduleType: "Learning module",
    description:
      "Explores how decisions are made about whether a patient is ready to proceed with care, and where those boundaries should exist. This artifact focuses on how incomplete information or poorly defined thresholds can lead to delays, cancellations, or unsafe progression. For providers, it highlights how decision boundaries shape both safety and efficiency. For patients, it determines whether care proceeds smoothly or becomes fragmented. This module examines readiness as a design problem, not just a checklist.",
    icon: ClipboardCheck,
    category: "Clinical Operations",
    focus: "Readiness",
    attributes: ["Education", "Evaluation"],
    moduleUrl: "https://medaistudio.moodlecloud.com/login/index.php",
    artifactUrl: "https://applina.ai",
  },
  {
    id: 5,
    title: "Clinical Documentation and Truth Representation Artifact",
    type: "Artifact",
    moduleType: "Learning module",
    description:
      "Examines how clinical encounters are translated into documentation, and what is lost, altered, or over interpreted in that process. This artifact focuses on the tension between efficiency and accuracy, and how representation of a patient’s story affects future care. For providers, it raises questions about responsibility and legal risk. For patients, it affects how their condition is understood over time. This module explores documentation as a representation problem, not just a record keeping task.",
    icon: FileText,
    category: "Documentation",
    focus: "Integrity",
    attributes: ["Education", "Evaluation"],
    moduleUrl: "https://medaistudio.moodlecloud.com/login/index.php",
    artifactUrl: "https://applina.ai",
  },
  {
    id: 6,
    title: "Follow Up and Continuity of Care Artifact",
    type: "Prototype",
    moduleType: "Learning module",
    description:
      "Explores how care continues beyond the initial interaction, and why many patients disengage despite clear recommendations. This artifact focuses on timing, relevance, and perceived value in follow up interactions. For patients, this determines whether care feels supportive or overwhelming. For providers, it affects outcomes, adherence, and continuity. This module examines continuity as an active design challenge, not a passive process.",
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
          These learning modules are derived from prototypes developed and
          evaluated on Applina.
        </p>

        <p className="text-muted-foreground mb-4 max-w-4xl">
          They are used within courses and structured evaluation exercises to
          examine how AI behaves in realistic scenarios, identify limitations,
          and assess real world relevance.
        </p>

        <p className="text-muted-foreground mb-4 max-w-4xl">
          Each module is grounded in an underlying artifact and designed to
          teach concepts, frameworks, and implementation considerations through
          direct interaction with evaluated systems.
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