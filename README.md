# Scan2Sustain - Smart QR Based Cleanliness Reporting System

## Database Setup

### Adding Locations

To add locations to your Supabase database, run these SQL commands in your Supabase SQL Editor:

```sql
INSERT INTO locations (name, description) VALUES
  ('Building A - Floor 1 - Main Entrance', 'Main entrance corridor and lobby area'),
  ('Building A - Floor 1 - Corridor', 'First floor corridor near classrooms'),
  ('Building A - Floor 2 - Cafeteria', 'Main cafeteria and dining area'),
  ('Building A - Floor 2 - Restrooms', 'Second floor restrooms'),
  ('Building B - Floor 1 - Library', 'Main library area'),
  ('Building B - Floor 1 - Computer Lab', 'Computer laboratory'),
  ('Building B - Floor 2 - Classrooms', 'Second floor classrooms'),
  ('Parking Lot A', 'Main parking area near Building A'),
  ('Parking Lot B', 'Parking area near Building B'),
  ('Outdoor Common Area', 'Open area between buildings'),
  ('Gymnasium', 'Main gymnasium and sports area'),
  ('Auditorium', 'Main auditorium and stage area');
```

### Database Schema

#### locations table:
```sql
CREATE TABLE locations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  qr_code VARCHAR(255) UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### complaints table:
```sql
CREATE TABLE complaints (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  location_id UUID NOT NULL REFERENCES locations(id),
  issue VARCHAR(255) NOT NULL,
  photo_url TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Running the Application

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Build for production: `npm run build`

## Features

- QR-based location identification
- Cleanliness issue reporting
- Photo upload capability
- Location-based complaint tracking