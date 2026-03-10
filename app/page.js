'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://sbrweumvawvcwxztyeeh.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicndldW12YXd2Y3d4enR5ZWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxMzI5MzEsImV4cCI6MjA4ODcwODkzMX0.CcmUB09BEtGUqRBDmKVhnoX9tF7oAOLDuYmQE34cenk"

const supabaseClient = createClient(supabaseUrl, supabaseKey)

export default function Home() {
  const [issue, setIssue] = useState('')
  const [photo, setPhoto] = useState(null)
  const [statusMessage, setStatusMessage] = useState('')
  const [location, setLocation] = useState('')

  useEffect(() => {
    // Get user's location (you might want to implement geolocation)
    setLocation('Location: Not implemented yet')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!issue) {
      setStatusMessage("Please select an issue")
      return
    }

    try {
      const { data, error } = await supabaseClient
        .from("complaints")
        .insert([
          {
            issue: issue
          }
        ])

      if (error) {
        console.error('Supabase error:', error)
        setStatusMessage(`Error submitting complaint: ${error.message}`)
      } else {
        console.log('Success:', data)
        setStatusMessage("Complaint submitted successfully")
        setIssue('')
        setPhoto(null)
      }
    } catch (err) {
      console.error('Network error:', err)
      setStatusMessage("Network error. Please try again.")
    }
  }

  return (
    <div className="container">
      <h1>Scan2Sustain</h1>
      <p className="subtitle">Smart QR Based Cleanliness Reporting System</p>
      <h2>{location}</h2>

      <form onSubmit={handleSubmit}>
        <label>Select Issue:</label>
        <select
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          required
        >
          <option value="">Choose an issue</option>
          <option value="litter">Litter and Trash</option>
          <option value="broken">Broken Equipment/Facilities</option>
          <option value="cleanliness">Poor Cleanliness</option>
          <option value="pests">Pests or Vermin</option>
          <option value="odors">Unpleasant Odors</option>
          <option value="maintenance">Maintenance Issues</option>
          <option value="safety">Safety Hazard</option>
          <option value="noise">Excessive Noise</option>
          <option value="parking">Parking Issues</option>
          <option value="lighting">Poor Lighting</option>
          <option value="vandalism">Vandalism or Damage</option>
          <option value="other">Other</option>
        </select>

        <label>Upload Photo (Optional):</label>
        <input
          type="file"
          onChange={(e) => setPhoto(e.target.files[0])}
          accept="image/*"
        />

        <button type="submit">Submit Complaint</button>
      </form>

      <p id="statusMessage">{statusMessage}</p>
    </div>
  )
}