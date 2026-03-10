import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://sbrweumvawvcwxztyeeh.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicndldW12YXd2Y3d4enR5ZWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxMzI5MzEsImV4cCI6MjA4ODcwODkzMX0.CcmUB09BEtGUqRBDmKVhnoX9tF7oAOLDuYmQE34cenk"

const supabaseClient = createClient(supabaseUrl, supabaseKey)

const sampleLocations = [
  { name: "Building A - Floor 1 - Main Entrance", description: "Main entrance corridor and lobby area" },
  { name: "Building A - Floor 1 - Corridor", description: "First floor corridor near classrooms" },
  { name: "Building A - Floor 2 - Cafeteria", description: "Main cafeteria and dining area" },
  { name: "Building A - Floor 2 - Restrooms", description: "Second floor restrooms" },
  { name: "Building B - Floor 1 - Library", description: "Main library area" },
  { name: "Building B - Floor 1 - Computer Lab", description: "Computer laboratory" },
  { name: "Building B - Floor 2 - Classrooms", description: "Second floor classrooms" },
  { name: "Parking Lot A", description: "Main parking area near Building A" },
  { name: "Parking Lot B", description: "Parking area near Building B" },
  { name: "Outdoor Common Area", description: "Open area between buildings" },
  { name: "Gymnasium", description: "Main gymnasium and sports area" },
  { name: "Auditorium", description: "Main auditorium and stage area" }
]

async function addLocations() {
  try {
    console.log('Adding sample locations to database...')

    const { data, error } = await supabaseClient
      .from('locations')
      .insert(sampleLocations)
      .select()

    if (error) {
      console.error('Error adding locations:', error)
      return
    }

    console.log('Successfully added locations:', data)
    console.log(`Added ${data.length} locations to the database`)

  } catch (err) {
    console.error('Network error:', err)
  }
}

// Run the function
addLocations()