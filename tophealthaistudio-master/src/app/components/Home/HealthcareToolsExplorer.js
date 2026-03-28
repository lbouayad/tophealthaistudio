"use client";

import React, { useMemo, useState } from "react";

const prototypeCases = [
  {
    id: 1,
    title: "Patient Communication Scenario",
    badge: "Case study",
    secondaryBadge: "Used in coursework",
    description:
      "Examines how AI handles patient-facing communication, response style, escalation cues, and contextual appropriateness in realistic scenarios.",
    specialty: "Communication",
    outcome: "Engagement",
    attributes: ["Education", "Evaluation"],
  },
  {
    id: 2,
    title: "Pre-Procedure Readiness Scenario",
    badge: "Case study",
    secondaryBadge: "Used in coursework",
    description:
      "Explores how AI supports readiness checks, preparation instructions, and completeness assessment before time or resources are committed.",
    specialty: "Preparation",
    outcome: "Readiness",
    attributes: ["Education", "Evaluation"],
  },
  {
    id: 3,
    title: "Symptom Pattern Interpretation Scenario",
    badge: "Case study",
    secondaryBadge: "Used in coursework",
    description:
      "Used to study how AI structures inputs, identifies patterns, and communicates uncertainty when scenarios involve symptom variation and ambiguity.",
    specialty: "Interpretation",
    outcome: "Relevance",
    attributes: ["Education", "Evaluation"],
  },
  {
    id: 4,
    title: "Clinical Documentation Scenario",
    badge: "Case study",
    secondaryBadge: "Used in coursework",
    description:
      "Assesses how AI organizes documentation-style outputs, preserves fidelity to source information, and avoids overreach in realistic use cases.",
    specialty: "Documentation",
    outcome: "Quality",
    attributes: ["Education", "Evaluation"],
  },
  {
    id: 5,
    title: "Continuity & Follow-Up Scenario",
    badge: "Case study",
    secondaryBadge: "Used in coursework",
    description:
      "Examines how AI supports continuity, follow-up communication, and workflow handoffs while maintaining clarity, restraint, and usefulness.",
    specialty: "Continuity",
    outcome: "Retention",
    attributes: ["Education", "Evaluation"],
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

const HealthcareToolsExplorer = () => {
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
    <section className="w-full bg-white text-brown px-6 md:px-10 lg:px-16 py-16 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Prototype Case Studies (for Education &amp; Evaluation)
          </h2>
          <p className="mt-4 text-base md:text-lg leading-[1.8] max-w-5xl mx-auto">
            These case studies are derived from prototypes developed and
            evaluated on Applina.
          </p>
          <p className="mt-4 text-base md:text-lg leading-[1.8] max-w-5xl mx-auto">
            They are used within coursework and structured evaluation exercises
            to examine how AI behaves in realistic scenarios, identify
            limitations, and assess real-world relevance.
          </p>
          <p className="mt-4 text-base md:text-lg leading-[1.8] max-w-5xl mx-auto">
            They are not clinical tools and are not intended to replace
            professional judgment.
          </p>
          <p className="mt-4 text-base md:text-lg font-medium max-w-5xl mx-auto">
            To explore or build new prototypes, visit Applina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 mb-10">
          <div>
            <label className="block text-sm font-semibold mb-2">Specialty</label>
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full border border-brown/20 rounded-xl px-4 py-3 bg-white"
            >
              {specialties.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Outcome</label>
            <select
              value={outcome}
              onChange={(e) => setOutcome(e.target.value)}
              className="w-full border border-brown/20 rounded-xl px-4 py-3 bg-white"
            >
              {outcomes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Attributes
            </label>
            <select
              value={attribute}
              onChange={(e) => setAttribute(e.target.value)}
              className="w-full border border-brown/20 rounded-xl px-4 py-3 bg-white"
            >
              {attributes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Sort by</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full border border-brown/20 rounded-xl px-4 py-3 bg-white"
            >
              <option value="Default">Default</option>
              <option value="A-Z">A–Z</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={resetFilters}
              className="w-full border border-brown rounded-xl px-4 py-3 font-semibold hover:bg-brown hover:text-white transition"
            >
              Reset Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="border border-brown/15 rounded-3xl p-6 shadow-sm hover:shadow-md transition bg-white"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm font-semibold px-3 py-1 rounded-full bg-lightBrown text-brown">
                  {item.badge}
                </span>
                <span className="text-sm font-semibold px-3 py-1 rounded-full bg-offWhite text-brown">
                  {item.secondaryBadge}
                </span>
              </div>

              <h3 className="text-2xl font-bold leading-tight mb-3">
                {item.title}
              </h3>

              <p className="text-base leading-[1.7] mb-5">{item.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm px-3 py-1 rounded-full border border-brown/20">
                  {item.specialty}
                </span>
                <span className="text-sm px-3 py-1 rounded-full border border-brown/20">
                  {item.outcome}
                </span>
                {item.attributes.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 rounded-full border border-brown/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-3 rounded-2xl bg-brown text-white font-semibold hover:opacity-90 transition">
                  View Case
                </button>
                <button className="px-5 py-3 rounded-2xl border border-brown text-brown font-semibold hover:bg-brown hover:text-white transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthcareToolsExplorer;