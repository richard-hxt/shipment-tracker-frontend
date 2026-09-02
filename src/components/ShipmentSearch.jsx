import { useState } from "react";
import api from "../api/axios";

function ShipmentSearch(){
    const[shipmentNumber, setShipmentNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    async function handleSearch(){
        setLoading(true);
        setError('');
        try {
            const token = localStorage.getItem('token');
            const response = await api.get(`/shipments/${shipmentNumber}`, {
                headers: {Authorization: `Bearer ${token}`}
            });
            setResult(response.data);
        } catch (err) {
            setError('No se encontró el shipment');
        }
        finally{
            setLoading(false);
        }
    }

    return(
        <div className="p-6">
            <div className="flex gap-2">
                <input type="text"
                value={shipmentNumber}
                placeholder="Numero de shipment"
                onChange={(e) => setShipmentNumber(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm w-80 bg-white"
                />
                <button
                    onClick={handleSearch}
                    className="bg-navy hover:bg-navy/90 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
                    >Buscar
                </button>
            </div>

            {error && <p className="text-orange text-sm mt-3">{error}</p>}

            {result && (
                <div className="bg-white border border-gray-200 rounded-xl p-4 mt-4 w-80">
                <p className="font-mono text-sm text-gray-500 mb-2">{result.shipment_number}</p>
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-teal/10 text-teal">
                {result.status_description}
                </span>
                <p className="text-sm text-gray-500 mt-3">{result.customer_number}</p>
                {result.on_hold && (
                <p className="text-sm text-orange mt-2">
                    En hold: {result.hold_reason || '—'}
                </p>
                )}
            </div>
                )}
        </div>

    )
}

export default ShipmentSearch;