import React, { useState, useEffect, useCallback } from "react";
import { base44 } from "@/api/base44Client";
import { Plus, Edit2, Trash2, ArrowLeft, RefreshCw } from "lucide-react";
import DataRecordForm from "./DataRecordForm";

const MANAGED_ENTITIES = [
  { name: "SiteImage", label: "Site Images" },
  { name: "User", label: "Users" },
];

// Entities where create is not allowed (built-in)
const NO_CREATE = ["User"];

export default function AdminData() {
  const [selectedEntity, setSelectedEntity] = useState("SiteImage");
  const [schema, setSchema] = useState(null);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState("list"); // "list" | "new" | "edit"
  const [editRecord, setEditRecord] = useState(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const entity = base44.entities[selectedEntity];
      const [schemaResult, recordsResult] = await Promise.all([
        entity.schema(),
        entity.list(),
      ]);
      setSchema(schemaResult);
      setRecords(recordsResult);
    } catch (err) {
      console.error("Failed to load entity data:", err);
      setSchema(null);
      setRecords([]);
    }
    setLoading(false);
  }, [selectedEntity]);

  useEffect(() => {
    loadData();
    setMode("list");
  }, [loadData]);

  const handleSave = async (data) => {
    const entity = base44.entities[selectedEntity];
    if (mode === "edit" && editRecord?.id) {
      await entity.update(editRecord.id, data);
    } else {
      await entity.create(data);
    }
    setMode("list");
    setEditRecord(null);
    await loadData();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this record? This cannot be undone.")) return;
    try {
      await base44.entities[selectedEntity].delete(id);
      await loadData();
    } catch (err) {
      alert("Delete failed: " + err.message);
    }
  };

  const propertyKeys = schema?.properties
    ? Object.keys(schema.properties)
    : [];

  return (
    <div className="space-y-6">
      {/* Entity selector */}
      <div className="flex flex-wrap gap-1">
        {MANAGED_ENTITIES.map((ent) => (
          <button
            key={ent.name}
            onClick={() => setSelectedEntity(ent.name)}
            className={`px-4 py-2 text-[10px] font-mono tracking-[0.1em] border transition-all ${
              selectedEntity === ent.name
                ? "border-ignition bg-ignition/10 text-ignition"
                : "border-titanium/20 text-titanium hover:border-titanium/40 hover:text-signal-white"
            }`}
          >
            {ent.label.toUpperCase()}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-6 h-6 border-2 border-titanium/20 border-t-ignition rounded-full animate-spin" />
        </div>
      ) : mode === "list" ? (
        <>
          {/* List header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-titanium tracking-wider">
                {records.length} RECORDS
              </span>
              <button
                onClick={loadData}
                className="text-titanium hover:text-signal-white transition-colors"
              >
                <RefreshCw size={14} />
              </button>
            </div>
            {!NO_CREATE.includes(selectedEntity) && (
              <button
                onClick={() => {
                  setEditRecord(null);
                  setMode("new");
                }}
                className="flex items-center gap-1.5 px-4 py-2 bg-ignition text-[10px] font-heading font-bold tracking-[0.15em] text-white hover:bg-ignition/90 transition-colors"
              >
                <Plus size={12} />
                ADD NEW
              </button>
            )}
          </div>

          {/* Records table */}
          {records.length === 0 ? (
            <div className="text-center py-20 text-[11px] font-mono text-titanium">
              No records found.
            </div>
          ) : (
            <div className="overflow-x-auto border border-titanium/20">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-titanium/20 bg-signal-white/[0.02]">
                    {propertyKeys.map((key) => (
                      <th
                        key={key}
                        className="text-left px-3 py-2 text-[9px] font-mono text-titanium tracking-wider whitespace-nowrap"
                      >
                        {key.toUpperCase()}
                      </th>
                    ))}
                    <th className="text-right px-3 py-2 text-[9px] font-mono text-titanium tracking-wider">
                      ACTIONS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((rec) => (
                    <tr
                      key={rec.id}
                      className="border-b border-titanium/10 hover:bg-signal-white/[0.02] transition-colors"
                    >
                      {propertyKeys.map((key) => (
                        <td
                          key={key}
                          className="px-3 py-2 text-[10px] font-mono text-signal-white/70 max-w-[200px] truncate"
                        >
                          {rec[key] != null ? String(rec[key]) : "—"}
                        </td>
                      ))}
                      <td className="px-3 py-2 text-right whitespace-nowrap">
                        <button
                          onClick={() => {
                            setEditRecord(rec);
                            setMode("edit");
                          }}
                          className="text-titanium hover:text-signal-white transition-colors mr-3"
                        >
                          <Edit2 size={13} />
                        </button>
                        <button
                          onClick={() => handleDelete(rec.id)}
                          className="text-titanium hover:text-ignition transition-colors"
                        >
                          <Trash2 size={13} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      ) : (
        /* Form mode */
        <div className="space-y-4">
          <button
            onClick={() => {
              setMode("list");
              setEditRecord(null);
            }}
            className="flex items-center gap-1.5 text-[10px] font-mono tracking-wider text-titanium hover:text-signal-white transition-colors"
          >
            <ArrowLeft size={12} />
            BACK TO LIST
          </button>
          <div className="border border-titanium/20 p-6 max-w-2xl">
            <h3 className="font-heading font-bold text-sm text-signal-white uppercase tracking-[0.1em] mb-6">
              {mode === "edit" ? "EDIT RECORD" : "NEW RECORD"} —{" "}
              {selectedEntity}
            </h3>
            <DataRecordForm
              schema={schema}
              record={editRecord}
              onSave={handleSave}
              onCancel={() => {
                setMode("list");
                setEditRecord(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}