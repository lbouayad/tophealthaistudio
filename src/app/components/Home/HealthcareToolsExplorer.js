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
import {
  Star,
  Github,
  Calendar,
  FileText,
  Users,
  Bell,
  Brain,
  Stethoscope,
  ClipboardList,
  MessageSquare,
  PlayCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// JSON data for healthcare AI tools
const healthcareTools = [
  {
    id: 1,
    title: "PreOp Risk Assistant",
    description: "Reduce complications",
    icon: Stethoscope,
    specialty: "Surgery",
    outcome: "Reduce complications",
    attributes: ["Risk Assessment", "Surgery"],
    rating: 4,
    reviews: 28,
    githubUrl: "https://github.com/preop-risk-assistant",
    demoUrl: "https://preop-risk-assistant.com",
    featured: true,
    compliance: "HIPAA-safe",
  },
  {
    id: 2,
    title: "Cancer Note Reviewer",
    description: "Improve documentation",
    icon: FileText,
    specialty: "Oncology",
    outcome: "Improve documentation",
    attributes: ["Documentation", "Oncology"],
    rating: 5,
    reviews: 42,
    githubUrl: "https://github.com/cancer-note-reviewer",
    demoUrl: "https://cancer-note-reviewer.com",
    featured: true,
    compliance: "HIPAA-safe",
  },
  {
    id: 3,
    title: "Pain Pattern Mapper",
    description: "Support triage decisions",
    icon: Brain,
    specialty: "Pain Management",
    outcome: "Support triage decisions",
    attributes: ["Triage", "Pain Management"],
    rating: 4,
    reviews: 35,
    githubUrl: "https://github.com/pain-pattern-mapper",
    demoUrl: "https://pain-pattern-mapper.com",
    featured: true,
    compliance: "HIPAA-safe",
  },
  {
    id: 4,
    title: "Cognitive Check-In Bot",
    description: "Boost follow-ups",
    icon: MessageSquare,
    specialty: "Psychiatry",
    outcome: "Boost follow-ups",
    attributes: ["Follow-ups", "Psychiatry"],
    rating: 3,
    reviews: 18,
    githubUrl: "https://github.com/cognitive-checkin-bot",
    demoUrl: "https://cognitive-checkin-bot.com",
    featured: true,
    compliance: "HIPAA-safe",
  },
  {
    id: 5,
    title: "Auto-Scribe Lite",
    description: "Reduce charting burden",
    icon: ClipboardList,
    specialty: "Primary Care",
    outcome: "Reduce charting burden",
    attributes: ["Charting", "Primary Care"],
    rating: 4,
    reviews: 31,
    githubUrl: "https://github.com/auto-scribe-lite",
    demoUrl: "",
    featured: true,
    compliance: "HIPAA-safe",
  },
];

const specialties = [
  "All",
  "Surgery",
  "Oncology",
  "Pain Management",
  "Psychiatry",
  "Primary Care",
];
const outcomes = [
  "All",
  "Reduce complications",
  "Improve documentation",
  "Support triage decisions",
  "Boost follow-ups",
  "Reduce charting burden",
];
const attributes = [
  "All",
  "Risk Assessment",
  "Documentation",
  "Triage",
  "Follow-ups",
  "Charting",
  "Surgery",
  "Oncology",
  "Pain Management",
  "Psychiatry",
  "Primary Care",
];
const sortOptions = ["Recommended", "Rating", "Reviews", "Name"];

export function HealthcareToolsExplorer() {
  const [specialtyFilter, setSpecialtyFilter] = useState("All");
  const [outcomeFilter, setOutcomeFilter] = useState("All");
  const [attributeFilter, setAttributeFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Recommended");

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

    // Sort the filtered results
    switch (sortBy) {
      case "Rating":
        return filtered.sort((a, b) => b.rating - a.rating);
      case "Reviews":
        return filtered.sort((a, b) => b.reviews - a.reviews);
      case "Name":
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case "Recommended":
      default:
        return filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.rating - a.rating;
        });
    }
  }, [specialtyFilter, outcomeFilter, attributeFilter, sortBy]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4`}
        fill={i < rating ? "#facc15" : "none"}
      />
    ));
  };

  return (
    <div className="bg-offWhite">
      {/* Main Content */}
      <div className="xl:px-32 lg:px-16 px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-foreground">
          Explore Healthcare AI Tools
        </h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Specialty
              </label>
              <Select
                value={specialtyFilter}
                onValueChange={setSpecialtyFilter}
              >
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
              <Select
                value={attributeFilter}
                onValueChange={setAttributeFilter}
              >
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
              setSortBy("Recommended");
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
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg text-foreground">
                          {tool.title}
                        </h3>
                        {tool.featured && (
                          <Badge variant="secondary" className="text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {tool.description && tool.description.length > 100
                          ? tool.description.slice(0, 100) + "..."
                          : tool.description}
                      </p>

                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex">{renderStars(tool.rating)}</div>
                        <span className="text-sm text-muted-foreground">
                          ({tool.reviews} reviews)
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {tool.attributes.map((attr) => (
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
                          onClick={() => window.open(tool.githubUrl, "_blank")}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={() =>
                            window.open(tool.demoUrl || "#", "_blank")
                          }
                          disabled={!tool.demoUrl}
                        >
                          <PlayCircle className="h-4 w-4 mr-2" />
                          Live Demo
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
              No tools found matching your filters. Try adjusting your search
              criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
